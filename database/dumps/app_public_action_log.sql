INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (14, '2019-10-08', false, 75, 189000, null, null, 1, null, '2019-10-08 18:03:49', '2019-10-08 18:03:49');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (15, '2019-10-08', false, 53, 57000, null, null, 1, null, '2019-10-08 18:09:05', '2019-10-08 18:09:05');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (16, '2019-10-08', false, 44, 59400, null, null, 1, null, '2019-10-08 18:15:33', '2019-10-08 18:15:33');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (17, '2019-10-07', false, 78, 31200, null, null, 1, null, '2019-10-08 18:18:18', '2019-10-08 18:18:18');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (18, '2019-10-08', false, 78, 12000, null, null, 1, null, '2019-10-08 18:21:08', '2019-10-08 18:21:08');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (19, '2019-10-08', true, 78, 24000, null, null, 1, null, '2019-10-08 18:36:50', '2019-10-08 18:36:50');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (23, '2019-10-08', false, 44, 59400, null, null, 1, null, '2019-10-08 19:26:45', '2019-10-08 19:26:45');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (24, '2019-10-08', false, 38, 20000, null, null, 1, null, '2019-10-08 19:28:38', '2019-10-08 19:28:38');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (25, '2019-10-08', false, 79, 47250, null, null, 1, null, '2019-10-08 20:05:35', '2019-10-08 20:05:35');
INSERT INTO action_log (`id`, `date`, `income`, `product_id`, `count`, `partition`, `customer_id`, `created_by`, `description`, `created_at`, `updated_at`) VALUES (26, '2019-10-08', true, 79, 15750, null, null, 1, null, '2019-10-08 20:06:50', '2019-10-08 20:06:50');


INSERT INTO customers (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES (2, 'ДН "Классик"', 'Ваф труб "МАРИЯ"', '2019-10-08 18:42:46', '2019-10-08 18:42:46');
INSERT INTO customers (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES (3, 'ООО КПФ "Рома"', 'Лоток 310х76хh36', '2019-10-08 18:46:09', '2019-10-08 18:46:09');
INSERT INTO customers (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES (4, 'ЧАО "ПО  "КОНТИ"', 'BELISSIMO Лоток 125Х68Х24', '2019-10-08 18:49:50', '2019-10-08 18:49:50');
INSERT INTO customers (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES (1, 'ТОВ "КФ "КВIТЕНЬ"', 'Лоток 182х136хh78', '2019-10-08 18:51:43', '2019-10-08 18:51:43');

INSERT INTO plan (id, product_id, `count`, created_at, updated_at, progress) VALUES (10, 75, 228000, '2019-10-08 17:40:44', '2019-10-08 18:03:49', 189000);
INSERT INTO plan (id, product_id, `count`, created_at, updated_at, progress) VALUES (8, 53, 60000, '2019-10-08 17:38:31', '2019-10-08 18:09:05', 57000);
INSERT INTO plan (id, product_id, `count`, created_at, updated_at, progress) VALUES (9, 78, 50000, '2019-10-08 17:39:54', '2019-10-08 18:21:08', 43200);
INSERT INTO plan (id, product_id, `count`, created_at, updated_at, progress) VALUES (11, 79, 60000, '2019-10-08 19:57:13', '2019-10-08 20:05:35', 47250);
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (27, 'Универсальная упаковка GP-04U ОПС 700мл корпус', null, 400, null, 26, null, '2019-10-05 18:57:11', '2019-10-05 18:57:11');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (28, 'Универсальная упаковка GP-04U ОПС 700мл крышка', null, 400, null, 26, null, '2019-10-05 19:02:36', '2019-10-05 19:02:36');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (29, 'Универсальная упаковка GP-04 ОПС', null, 360, null, null, null, '2019-10-05 19:05:20', '2019-10-05 19:05:20');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (30, 'Универсальная упаковка GP-04 ОПС корпус', null, 360, null, 29, null, '2019-10-05 19:06:29', '2019-10-05 19:06:29');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (31, 'Универсальная упаковка GP-04 ОПС крышка', null, 360, null, 29, null, '2019-10-05 19:07:29', '2019-10-05 19:07:29');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (32, 'Универсальная упаковка GP-09 ОПС 500мл', null, 480, null, null, null, '2019-10-05 19:08:50', '2019-10-05 19:08:50');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (8, 'Универсальная упаковка GP-05 ОПС', null, 320, null, null, null, '2019-10-05 17:08:08', '2019-10-05 17:08:08');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (33, 'Универсальная упаковка GP-09 ОПС 500мл крышка', null, 480, null, 32, null, '2019-10-05 19:09:39', '2019-10-05 19:11:18');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (34, 'Универсальная упаковка GP-09 ОПС 500мл корпус', null, 480, null, 32, null, '2019-10-05 19:10:34', '2019-10-05 19:11:44');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (35, 'Универсальная упаковка GP-03 ОПС 240мл', null, 1350, null, null, null, '2019-10-05 19:49:33', '2019-10-05 19:49:33');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (36, 'Универсальная упаковка GP-03 ОПС 240мл корпус', null, 1350, null, 35, null, '2019-10-05 19:50:39', '2019-10-05 19:50:39');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (37, 'Универсальная упаковка GP-03 ОПС 240мл крышка', null, 1350, null, 35, null, '2019-10-05 19:51:22', '2019-10-05 19:51:22');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (6, 'Универсальная упаковка GP-03 ПЭТ', null, 1350, null, null, null, '2019-10-05 17:02:21', '2019-10-05 17:24:30');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (7, 'Универсальная упаковка GP-04 ПЭТ', null, 800, null, null, null, '2019-10-05 17:02:52', '2019-10-05 17:24:45');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (38, 'ЛУКАС лоток 270х140х60', null, 800, null, null, null, '2019-10-05 19:53:12', '2019-10-05 19:53:12');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (9, 'Тортница пластиковая GP-07 ПЭТ дно', null, 250, null, 11, null, '2019-10-05 17:14:37', '2019-10-05 17:28:55');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (10, 'Тортница пластиковая GP-07 ПЭТ крышка', null, 250, null, 11, null, '2019-10-05 17:27:38', '2019-10-05 17:32:24');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (13, 'Тортница пластиковая GP-07 ОПС крышка', null, 250, null, null, null, '2019-10-05 17:44:49', '2019-10-05 17:44:49');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (12, 'Тортница пластиковая GP-07 ПС белый дно', null, 250, null, null, null, '2019-10-05 17:41:53', '2019-10-05 17:45:51');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (3, 'Универсальная упаковка GP-03 ПЭТ крышка', 0, 1350, 2.5, 6, null, '2019-10-05 16:42:58', '2019-10-07 18:18:19');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (5, 'Универсальная упаковка GP-04 ПЭТ крышка', 1, 800, null, 7, null, '2019-10-05 16:50:55', '2019-10-07 18:17:42');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (4, 'Универсальная упаковка GP-04 ПЭТ корпус', 2, 800, null, 7, null, '2019-10-05 16:50:23', '2019-10-07 18:17:37');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (2, 'Универсальная упаковка GP-03 ПЭТ корпус', 0, 1350, 8.5, 6, null, '2019-10-05 16:40:05', '2019-10-07 18:19:09');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (14, 'Тортница пластиковая GP-10 ОПС  купол', null, 250, null, null, null, '2019-10-05 18:02:23', '2019-10-05 18:02:23');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (15, 'Тортница пластиковая GP-07 ПЭТ коричневый дно', null, 250, null, null, null, '2019-10-05 18:04:21', '2019-10-05 18:04:21');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (18, 'Тортница пластиковая GP-10 с коричневым дном', null, 250, null, null, null, '2019-10-05 18:18:42', '2019-10-05 18:18:42');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (16, 'Тортница пластиковая GP-10 ОПС купол', null, 250, null, 18, null, '2019-10-05 18:16:09', '2019-10-05 18:19:04');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (17, 'Тортница пластиковая GP-10 ПЭТ коричневый дно', null, 250, null, 18, null, '2019-10-05 18:17:25', '2019-10-05 18:19:22');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (11, 'Тортница пластиковая GP-07 ПЭТ', null, 250, null, null, 'В наличии еще по 5 ящиков ОПС купола и ПС белого дна по 200 штук в ящике', '2019-10-05 17:28:38', '2019-10-05 18:30:57');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (19, 'Тортница пластиковая GP-06 0,5 кг.', null, 500, null, null, null, '2019-10-05 18:39:15', '2019-10-05 18:39:15');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (20, 'Тортница пластиковая GP-06 0,5 кг. дно', null, 500, null, 19, null, '2019-10-05 18:41:46', '2019-10-05 18:41:46');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (21, 'Тортница пластиковая GP-06 0,5 кг. крышка', null, 500, null, 19, null, '2019-10-05 18:43:17', '2019-10-05 18:43:17');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (22, 'Универсальная упаковка GP-02 ОПС250 "SPAR"', null, 400, null, null, null, '2019-10-05 18:45:44', '2019-10-05 18:45:44');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (23, 'Универсальная упаковка GP-01 ОПС "SPAR"', null, 800, null, null, null, '2019-10-05 18:46:28', '2019-10-05 18:52:24');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (24, 'Универсальная упаковка GP-02 ОПС250', null, 400, null, null, null, '2019-10-05 18:53:19', '2019-10-05 18:53:19');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (25, 'Универсальная упаковка GP-01 ОПС', null, 800, null, null, null, '2019-10-05 18:53:51', '2019-10-05 18:53:51');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (26, 'Универсальная упаковка GP-04U ОПС 700мл', null, 400, null, null, null, '2019-10-05 18:55:27', '2019-10-05 18:55:27');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (40, 'Тортница пластиковая GP-08 ПЭТ коричневый дно', null, 200, null, 39, null, '2019-10-05 19:59:19', '2019-10-05 19:59:19');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (41, 'Тортница пластиковая GP-08 ОПС купол', null, 200, null, 39, null, '2019-10-05 20:00:28', '2019-10-05 20:00:28');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (42, 'Тортница пластиковая GP-08 ПС белый дно', null, 200, null, 39, null, '2019-10-05 20:02:55', '2019-10-05 20:02:55');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (39, 'Тортница пластиковая GP-08', null, 200, null, null, null, '2019-10-05 19:57:49', '2019-10-05 20:03:14');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (43, 'Лоток 310х76хh36', null, 780, null, null, 'Замовник КПФ "Рома"', '2019-10-05 20:06:55', '2019-10-05 20:06:55');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (44, 'Лоток 182х136х78', null, 300, null, null, 'Замовник ТОВ КФ "Квiтень"', '2019-10-05 20:09:44', '2019-10-05 20:09:44');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (46, 'Коррекс "Прометей"', null, 1500, null, null, 'Замовник ХБФ', '2019-10-05 20:13:39', '2019-10-05 20:13:39');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (45, 'Коррекс "Грильяж"', null, 1500, null, null, 'Замовник ХБФ', '2019-10-05 20:12:25', '2019-10-05 20:14:03');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (47, 'Коррекс "Птичье молоко"', null, 1500, null, null, 'Замовник ХБФ', '2019-10-05 20:15:15', '2019-10-05 20:15:15');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (48, 'Коррекс "Жорж"', null, 500, null, null, 'Замовник ХБФ.  В ящике 500 комплектов.', '2019-10-05 20:18:26', '2019-10-05 20:18:26');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (49, 'Коррекс "Зефир неглазированный"', null, 1600, null, null, 'Замовник ХБФ', '2019-10-05 20:19:42', '2019-10-05 20:19:42');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (50, 'Коррекс "Вишня АТБ" 350г', null, 1400, null, null, 'Замовник ХБФ', '2019-10-05 20:20:42', '2019-10-05 20:20:42');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (51, 'Коррекс "Ассорти премиум" 300г', null, 1200, null, null, 'Замовник ХБФ', '2019-10-05 20:21:56', '2019-10-05 20:21:56');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (52, 'Коррекс "Вишневый аромат мал"', null, 2100, null, null, 'Замовник ХБФ', '2019-10-05 20:22:56', '2019-10-05 20:22:56');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (53, 'Коррекс "BONBON"', null, 1500, null, null, 'Замовник ХБФ', '2019-10-05 20:24:57', '2019-10-05 20:24:57');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (54, 'Коррекс "Жорж классик"', null, 600, null, null, 'Замовник ХБФ', '2019-10-05 20:25:45', '2019-10-05 20:25:45');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (55, 'Коррекс "Сердце Клеопатры"', null, 1500, null, null, 'Замовник ХБФ. Дата: февраль 2017г', '2019-10-05 20:27:53', '2019-10-05 20:27:53');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (56, 'Коррекс "SKARLET"', null, 1000, null, null, 'Замовник ХБФ', '2019-10-05 20:29:14', '2019-10-05 20:29:14');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (57, 'Коррекс "МУАР"', null, 1800, null, null, 'Замовник ХБФ', '2019-10-05 20:30:12', '2019-10-05 20:30:12');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (58, 'Коррекс "VanilaDreams"', null, 2100, null, null, 'Замовник ХБФ', '2019-10-05 20:31:37', '2019-10-05 20:31:37');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (59, 'Коррекс  "Черный принц"', null, 1400, null, null, 'Замовник ХБФ', '2019-10-05 20:32:31', '2019-10-05 20:32:31');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (60, 'Коррекс "Стрела"', null, 1400, null, null, 'Замовник ХБФ', '2019-10-05 20:33:27', '2019-10-05 20:33:27');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (61, 'Коррекс "Лимонные дольки"', null, 1200, null, null, 'Замовник ХБФ', '2019-10-05 20:34:30', '2019-10-05 20:34:30');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (62, 'Коррекс "Jelly fruit slices lemon and orange flavour"', null, 1700, null, null, 'Замовник ХБФ', '2019-10-05 20:38:23', '2019-10-05 20:38:23');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (63, 'Коррекс "CHERRY" 270Х140', null, 1500, null, null, 'Замовник ХБФ', '2019-10-05 20:40:22', '2019-10-05 20:40:22');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (65, 'Коррекс "Ассорти "Доминик"', null, 1100, null, null, 'Замовник Полтава Кондитер', '2019-10-05 20:43:29', '2019-10-05 20:43:29');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (66, 'Коррекс "Белочка" 150г', null, 1, null, null, 'Замовник Полтава Кондитер', '2019-10-05 20:46:54', '2019-10-05 20:46:54');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (67, 'Коррекс "Белочка" 250г', null, 600, null, null, 'Замовник Полтава Кондитер', '2019-10-05 20:47:43', '2019-10-05 20:48:16');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (68, 'Коррекс "Экспрессия"', null, 900, null, null, 'Замовник Полтава Кондитер', '2019-10-05 20:49:02', '2019-10-05 20:49:02');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (69, 'Коррекс "CERRY 87х260"', null, 3000, null, null, 'Замовник ХБФ', '2019-10-05 20:51:03', '2019-10-05 20:51:18');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (70, 'Коррекс"Вишня пяигранная"', null, 900, null, null, 'Замовник Полтава Кондитер', '2019-10-05 20:54:41', '2019-10-05 20:54:56');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (64, 'Укладка 175х266х7', null, 750, null, null, 'Замовник БКК', '2019-10-05 20:41:58', '2019-10-05 20:56:51');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (71, 'Коррекс  "Ваф труб МАРИЯ"', null, 3000, null, null, 'Замовник ДН "КЛАССИК"', '2019-10-05 20:58:45', '2019-10-05 20:58:45');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (73, 'Коррекс "Old collection" 320г крышка', null, 600, null, 72, 'Замовник ХБФ', '2019-10-05 21:02:27', '2019-10-05 21:02:27');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (72, 'Коррекс "Old collection" 320г', null, 600, null, null, 'Замовник ХБФ', '2019-10-05 21:00:37', '2019-10-05 21:02:43');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (74, 'Коррекс "Old collection" 320г дно', null, 600, null, 72, 'Замовник ХБФ', '2019-10-05 21:03:50', '2019-10-05 21:03:50');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (75, 'Коррекс "BELISSIMO"', null, 3000, null, null, 'Замовник ЧАО  "ПО "КОНТИ"', '2019-10-05 21:06:48', '2019-10-05 21:06:48');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (76, 'Коррекс "Зефир в шоколаде"', null, 800, null, null, 'Замовник ХБФ', '2019-10-05 21:08:13', '2019-10-05 21:08:13');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (77, 'Коррекс "Ассорти прем" 300г NEW', null, 1400, null, null, 'Замовник ХБФ', '2019-10-05 21:11:11', '2019-10-05 21:11:11');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (78, 'Коррекс "Ассорти прем" 200г', null, 2400, null, null, 'Замовник ХБФ', '2019-10-05 21:12:42', '2019-10-05 21:12:42');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (79, 'Коррекс "Трюфель"', null, 2250, null, null, 'Замовник БКК', '2019-10-05 21:13:54', '2019-10-05 21:13:54');
INSERT INTO products (id, `name`, box_id, box_size, box_weight, parent_product, description, created_at, updated_at) VALUES (1, 'Универсальная упаковка GP-01 ПЭТ', 0, 800, 2.5, null, 'Описание', '2019-10-05 16:36:43', '2019-10-07 18:06:02');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (1, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (2, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (3, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (4, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (5, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (6, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (7, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (9, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (10, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (11, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (12, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (13, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (14, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (15, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (16, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (17, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (18, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (19, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (20, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (21, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (22, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (23, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (24, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (25, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (26, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (28, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (29, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (30, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (31, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (32, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (33, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (34, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (35, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (36, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (37, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (39, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (40, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (41, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (42, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (43, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (45, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (46, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (47, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (48, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (49, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (50, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (51, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (52, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (8, null, 500, null, null, '2019-10-07 18:24:41');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (54, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (55, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (56, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (57, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (58, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (59, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (60, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (61, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (62, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (63, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (64, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (65, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (66, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (67, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (68, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (69, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (70, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (71, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (72, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (73, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (74, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (76, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (77, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (80, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (81, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (82, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (83, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (84, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (85, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (86, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (87, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (88, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (89, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (90, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (91, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (92, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (93, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (94, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (95, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (96, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (97, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (98, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (99, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (100, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (101, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (102, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (103, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (104, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (105, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (106, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (107, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (108, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (109, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (110, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (111, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (112, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (113, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (114, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (115, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (116, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (117, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (118, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (119, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (120, null, 0, null, null, null);
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (75, null, 189000, null, null, '2019-10-08 18:03:49');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (53, null, 57000, null, null, '2019-10-08 18:09:04');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (78, null, 19200, null, null, '2019-10-08 18:36:50');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (27, null, 0, null, null, '2019-10-08 19:02:43');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (44, null, 59400, null, null, '2019-10-08 19:26:45');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (38, null, 20000, null, null, '2019-10-08 19:28:38');
INSERT INTO stock (product_id, `partition`, `count`, description, created_at, updated_at) VALUES (79, null, 31500, null, null, '2019-10-08 20:06:50');
INSERT INTO users (id, email, `name`, password, remember_token, deleted_at, created_at, updated_at) VALUES (1, 'root@gmail.com', 'root', '$2y$10$CnURhubMJVkC8Fr/sVS12ul1mjuZSbdmWrMjLzELd5z6E.o.T2T72', 'aWBihA2XjQ', null, '2019-10-05 16:31:13', '2019-10-05 16:31:13');
INSERT INTO users (id, email, `name`, password, remember_token, deleted_at, created_at, updated_at) VALUES (2, 'admin@gmail.com', 'admin', '$2y$10$kxsQ/K/QN4LxC1Ec4G2xQuqQI4cb/kyqBOA2K3Lp1h.D8.Et0XTZW', 'MbgS5lkVHZ', null, '2019-10-05 16:31:13', '2019-10-05 16:31:13');