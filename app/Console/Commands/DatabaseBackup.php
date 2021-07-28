<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

/**
 * Class DatabaseBackup
 */
class DatabaseBackup extends Command
{

    /**
     * Command signature
     *
     * @var string
     */
    protected $signature = 'app:db:dump';

    /**
     * Command description
     *
     * @var string
     */
    protected $description = 'Generate db dump';

    /**
     * Run command
     *
     * @return void
     */
    public function handle()
    {
        $filename = "backup-" . Carbon::now()->format('Y-m-d') . ".sql";

        $containerCommand = "mysqldump --user=homestead --password=secret --host=stockworker-db homestead > " . "/docker-entrypoint-initdb.d/" . $filename;
        $envCommand = 'docker exec -it stockworker-db bash -c "' . $containerCommand . '"';
        $returnVar = NULL;
        $output = NULL;

        exec($envCommand, $output, $returnVar);

        $copyCommand = "docker cp stockworker-db:/docker-entrypoint-initdb.d/dump.sql ./storage/app/backup/" . $filename;
        exec($copyCommand, $output, $returnVar);

        $this->sendMail($filename);
    }


    public function sendMail($filename)
    {
        Log::debug('sendMail');

        $mailto = 'pavel@zolotarev.pp.ua';
        $subject = 'Stock backup';
        $file = "./storage/app/backup/" . $filename;
        $message = "http://stock.zolotarev.pp.ua/storage/app/backup/" . $filename;

//        Log::debug('file: ' . var_export($file, 1));

        $content = file_get_contents($file);
        $content = chunk_split(base64_encode($content));

        // a random hash will be necessary to send mixed content
        $separator = md5(time());

        // carriage return type (RFC)
        $eol = "\r\n";

        // main header (multipart mandatory)
        $headers = "From: name <test@test.com>" . $eol;
        $headers .= "MIME-Version: 1.0" . $eol;
        $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
        $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
        $headers .= "This is a MIME encoded message." . $eol;

        // message
        $body = "--" . $separator . $eol;
        $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
        $body .= "Content-Transfer-Encoding: 8bit" . $eol;
        $body .= $message . $eol;

        // attachment
        $body .= "--" . $separator . $eol;
        $body .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
        $body .= "Content-Transfer-Encoding: base64" . $eol;
        $body .= "Content-Disposition: attachment" . $eol;
        $body .= $content . $eol;
        $body .= "--" . $separator . "--";

        //SEND Mail
        if (mail($mailto, $subject, $body, $headers)) {
            echo "mail send ... OK"; // or use booleans here
        } else {
            echo "mail send ... ERROR!";
            print_r( error_get_last() );
        }
    }
}
