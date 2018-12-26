CREATE TABLE `sample` (
  `id` int(11) NOT NULL,
  `string` varchar(64) COLLATE utf16_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_bin;

ALTER TABLE `sample`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `sample`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

INSERT INTO `sample`

INSERT INTO `sample` (`string`) VALUES
  ('Alex'),
  ('Bob'),
  ('Carl');
