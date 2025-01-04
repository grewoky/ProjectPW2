<?php

use Illuminate\Support\Str;

return [
    /*
    |----------------------------------------------------------------------
    | Default Database Connection Name
    |----------------------------------------------------------------------
    |
    | Set this to a valid connection, for example, 'mysql', 'sqlite', or
    | 'pgsql', or leave it as is for the default database connection.
    |
    */

    'default' => env('DB_CONNECTION', 'sqlite'),  // Or 'mysql', 'pgsql', etc.

    /*
    |----------------------------------------------------------------------
    | Database Connections
    |----------------------------------------------------------------------
    |
    | You can configure the default database connections you use. If you're
    | not using a traditional SQL database, Firestore is handled separately.
    |
    */

    'connections' => [
        'sqlite' => [
            'driver' => 'sqlite',
            'database' => database_path('database.sqlite'),
            'prefix' => '',
        ],
        'mysql' => [
            'driver' => 'mysql',
            // Other MySQL configurations...
        ],
        'pgsql' => [
            'driver' => 'pgsql',
            // Other PostgreSQL configurations...
        ],
        // Add more connections if needed, or leave them out if you're not using them.
    ],

    'migrations' => [
        'table' => 'migrations',
    ],
];
