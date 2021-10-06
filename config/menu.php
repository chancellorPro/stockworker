<?php
//return [
//    [
//        'name' => 'Admin',
//        'child' => [
//            ['name' => 'Products', 'route' => 'product.index', 'icon' => 'fa-cubes'],
//            ['name' => 'Action log', 'route' => 'action-log.index', 'icon' => 'fa-history'],
//            ['name' => 'Partitions', 'route' => 'partition.index', 'icon' => 'fa-th'],
//            ['name' => 'Colors', 'route' => 'color.index', 'icon' => 'fa-paint-brush'],
//            ['name' => 'Materials', 'route' => 'material.index', 'icon' => 'fa-puzzle-piece'],
//            ['name' => 'Customers', 'route' => 'customer.index', 'icon' => 'fa-users'],
//            ['name' => 'Plan', 'route' => 'plan.index', 'icon' => 'fa-bullhorn'],
//            ['name' => 'Users', 'route' => 'user.index', 'icon' => 'fa-users'],
//        ],
//    ],
//
//];
return [
    [
        'name'  => 'Admin',
        'child' => [
            ['name' => 'События', 'route' => 'action-log.index', 'icon' => 'fa-truck'],
            ['name' => 'Склад', 'route' => 'stock.index', 'icon' => 'fa-cubes'],
            ['name' => 'Товары', 'route' => 'product.index', 'icon' => 'fa-th-large'],
            ['name' => 'Материалы Товаров', 'route' => 'product-material.index', 'icon' => 'fa-delicious'],
            ['name' => 'Материалы', 'route' => 'material.index', 'icon' => 'fa-puzzle-piece'],
            ['name' => 'Цвета', 'route' => 'color.index', 'icon' => 'fa-paint-brush'],
            ['name' => 'Заказчики', 'route' => 'customer.index', 'icon' => 'fa-fax'],
//            ['name' => 'План', 'route' => 'plan.index', 'icon' => 'fa-bullhorn'],
//            ['name' => 'История', 'route' => 'history', 'icon' => 'fa-history'],
        ],
        'boxes' => [
            ['name' => 'Поставки ящиков', 'route' => 'box-log.index', 'icon' => 'fa-dropbox'],
            ['name' => 'Ящики на складе', 'route' => 'box-stock.index', 'icon' => 'fa-dropbox'],
            ['name' => 'Типы ящиков', 'route' => 'box.index', 'icon' => 'fa-dropbox'],
            ['name' => 'Менеджеры', 'route' => 'user.index', 'icon' => 'fa-users'],
        ]
    ],
];
