<?php

use Illuminate\Support\Facades\Redis;

if (! function_exists('pushNotify')) {
    /**
     * Add notify to session.
     *
     * @param string $key   Key 'success'|'warning'|'danger'|'info'
     * @param string $value Value
     *
     * @return void
     */
    function pushNotify(string $key, string $value)
    {
        $types = ['info', 'success', 'warning', 'danger'];
        if (!empty($value) && in_array($key, $types)) {
            $values   = Session::get($key, []);
            $values[] = $value;
            Session::flash($key, $values);
        }
    }
}

if (! function_exists('getNotify')) {
    /**
     * Get notify from session.
     *
     * @return array
     */
    function getNotify():array
    {
        $notice = [];
        $types  = ['info', 'success', 'warning', 'danger'];
        foreach ($types as $type) {
            $notice[$type] = Session::get($type, []);
            Session::forget($type);
        }
        return $notice;
    }
}

if (! function_exists('arrayToCollection')) {
    /**
     * Convert array to object collection
     *
     * @param array $array Array
     *
     * @return \Illuminate\Support\Collection
     */
    function arrayToCollection(array $array = [])
    {
        return collect(json_decode(json_encode($array)));
    }
}

if (! function_exists('arrayToKeyValue')) {
    /**
     * Convert multidimensional array to simle key-value array
     *
     * @param array $array Array
     * @param mixed $key   Key
     * @param mixed $value Value
     *
     * @return array
     */
    function arrayToKeyValue(array $array, $key, $value):array
    {
        $res = [];
        foreach ($array as $row) {
            if (isset($row[$key]) && isset($row[$value])) {
                $res[$row[$key]] = $row[$value];
            }
        }
        return $res;
    }
}

if (! function_exists('parsePossibleValues')) {
    /**
     * Parse possible values from string to object collection
     *
     * @param null|string $string     Values
     * @param boolean     $assocArray Is the assoc
     *
     * @return array|\Illuminate\Support\Collection
     */
    function parsePossibleValues(?string $string, bool $assocArray = false)
    {
        $list = [];

        if (!empty($string)) {
            $values = explode(',', $string);
            foreach ($values as $row) {
                if (strpos($row, ':') !== false) {
                    list($name, $value) = explode(':', $row);
                    if ($assocArray) {
                        $list[trim($name)] = trim($value);
                    } else {
                        $list[] = ['id' => trim($name), 'value' => trim($value)];
                    }
                }
            }
        }

        return $assocArray ? $list : arrayToCollection($list);
    }
}

if (! function_exists('parameterizeArray')) {
    /**
     * Parse possible values from string to object collection
     *
     * @param array $array Array
     *
     * @return array
     */
    function parameterizeArray(array $array):array
    {
        $out = [];
        foreach ($array as $key => $value) {
            $out[] = "$key=$value";
        }
        return $out;
    }
}

if (! function_exists('assocArrayToCollection')) {
    /**
     * Convert key value array to collection
     *
     * @param array $array     Array
     * @param mixed $keyName   Key Name
     * @param mixed $valueName Value Name
     *
     * @return array|\Illuminate\Support\Collection
     */
    function assocArrayToCollection(array $array, $keyName = 'id', $valueName = 'value')
    {
        $list = [];
        foreach ($array as $key => $value) {
            $list[] = [
                $keyName   => $key,
                $valueName => $value,
            ];
        }
        
        return arrayToCollection($list);
    }
}

if (! function_exists('configArrayToCollection')) {
    /**
     * Convert key value array to collection
     *
     * @param array $array Array
     * @param mixed $keyName Key Name
     * @param mixed $valueName Value Name
     *
     * @param string $lang
     * @return array|\Illuminate\Support\Collection
     */
    function configArrayToCollection(array $array, $keyName = 'id', $valueName = 'value', $lang = 'sources')
    {
        $list = [];
        foreach ($array as $value) {
            $list[] = [
                $keyName   => $value,
                $valueName => __('cms-action-history.' . $lang . '.' . $value),
            ];
        }

        return arrayToCollection($list);
    }
}

if (! function_exists('userCache')) {
    /**
     * Return connection to the user's data in the redis
     *
     * @return \Illuminate\Redis\Connections\Connection
     */
    function userCache() :\Illuminate\Redis\Connections\Connection
    {
        return Redis::connection('user');
    }
}

if (! function_exists('cast')) {
    /**
     * Casts the types
     *
     * @param mixed $data Data
     *
     * @return float|integer|mixed
     */
    function cast($data)
    {
        if (is_numeric($data)) {
            if (is_float($data)) {
                return (float) $data;
            } else {
                return (int) $data;
            }
        }

        return $data;
    }
}

if (! function_exists('getSubFolder')) {
    /**
     * Return sub path for the file by name
     *
     * Result of the function looks like: a1/b2/c3
     * Where md5 of the file = a1b2c3.........
     *
     * @param string $fileName File name
     *
     * @return string
     */
    function getSubFolder(string $fileName):string
    {
        $fileNameHash = substr(md5($fileName), 0, 6);
        $pathParts    = str_split($fileNameHash, 2);
        return join('/', $pathParts);
    }
}

if (! function_exists('modelConst')) {
    /**
     * Return constant from model
     *
     * @param string $modelName Model name
     * @param string $var       Const name
     *
     * @return mixed
     */
    function modelConst(string $modelName, string $var)
    {
        $const = ("App\Models\\$modelName::$var");
        return constant($const);
    }
}

if (! function_exists('environment')) {
    /**
     * Returns selected environment
     * It is using in choice connection to db
     *
     * @return string
     */
    function environment():string
    {
        $env = app()->environment();

        if (request()->has('env')) {
            $env = request()->get('env');
        }

        switch ($env) {
            case 'stage':
            case 'live':
                return $env;
            default:
                return 'dev';
        }
    }
}

if (! function_exists('isDev')) {
    /**
     * Is it dev?
     *
     * @return bool
     */
    function isDev():bool
    {
        return env('APP_ENV') === 'dev';
    }
}

if (! function_exists('xpToLevel')) {
    /**
     * Convert xp to level
     *
     * @param array   $levels Array
     * @param integer $xp     XP
     *
     * @return integer
     */
    function xpToLevel(array $levels, int $xp)
    {
        $currentLevel = 1;
        foreach ($levels as $level => $levelData) {
            $nextLevelXp = $levels[$level+1]['experience'] ?? 0;

            if($levelData['experience'] < $xp && ($xp < $nextLevelXp || $nextLevelXp == 0)) {
                $currentLevel = $level;
                break;
            }
        }
        return $currentLevel;
    }
}

if (! function_exists('toPacificTime')) {
    /**
     * Convert to Pacific Time from UTC
     *
     * @param string   $date Date (Y-m-d H:i:s)
     *
     * @return string
     */
    function toPacificTime(string $date)
    {
        $date = Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $date);
        $date->setTimezone('America/Los_Angeles');

        return $date->format('Y-m-d H:i:s');
    }
}

if (! function_exists('fromPacificToUTC')) {
    /**
     * Convert to UTC from Pacific Time
     *
     * @param string   $date Date (Y-m-d H:i:s)
     *
     * @return string
     */
    function fromPacificToUTC(string $date)
    {
        $date = Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $date, 'America/Los_Angeles');
        $date->setTimezone('UTC');

        return $date->format('Y-m-d H:i:s');
    }
}

if (! function_exists('arrayToAssoc')) {
    /**
     * Array to assoc array
     *
     * @param array $array
     * @return array
     */
    function arrayToAssoc(array $array):array
    {
        $result = [];

        foreach ($array as $item) {
            $result[$item] = $item;
        }

        return $result;
    }
}

if (! function_exists('convertToType')) {
    /**
     * Convert var type
     *
     * @param $value
     * @param $type
     * @return array|bool|float|int
     */
    function convertToType($value, $type)
    {
        switch ($type) {
            case 'int':
                $value = (int)$value;
                break;
            case 'bool':
                $value = (bool)$value;
                break;
            case 'enum':
                $value = (int)$value;
                break;
            case 'float':
                $value = (float)$value;
                break;
            case 'delta_time':
                $value = (int)$value;
                break;
        }

        return $value;
    }
}

if (! function_exists('isRightFlow')) {
    /**
     * Is it right flow (dev -> stage OR stage -> live)
     *
     * @param string $fromEnv
     * @param string $toEnv
     *
     * @return bool
     */
    function isRightFlow(string $fromEnv, string $toEnv):bool
    {
        $envSteps = config('deploy.environments_sorting');
        return $envSteps[$fromEnv] < $envSteps[$toEnv];
    }
}

if (! function_exists('isBitSet')) {
    /**
     * Check bit mask
     *
     * @param integer $mask
     * @param integer $bit
     *
     * @return bool
     */
    function isBitSet(int $mask, int $bit):bool
    {
        return (bool) ($mask & $bit);
    }
}
