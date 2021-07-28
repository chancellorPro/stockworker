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

        $containerCommand = "mysqldump --user=homestead --password=secret --host=host.docker.internal homestead > " . "/docker-entrypoint-initdb.d/" . $filename;
        $envCommand = 'docker exec -it stockworker-db bash -c "' . $containerCommand . '"';
        $returnVar = NULL;
        $output = NULL;

        exec($envCommand, $output, $returnVar);

        $copyCommand = "docker cp stockworker-db:/docker-entrypoint-initdb.d/dump.sql ./storage/app/backup/" . $filename;
        exec($copyCommand, $output, $returnVar);
    }
}
