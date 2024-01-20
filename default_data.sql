INSERT INTO `USER` (`email`,`password`, `name`) VALUES ('joonseok.chung@gmail.com','password', 'Master');
INSERT INTO `USER` (`email`, `password`, `name`) VALUES ('dreamtaste@patisiel.com', 'gyeonchalseo', 'youngjoon');
INSERT INTO `USER` (`email`, `password`, `name`) VALUES ('goonin@gookbang.com', '1q2w3e4r', 'hwanmin');
INSERT INTO `USER` (`email`, `password`, `name`) VALUES ('coco@cute.com', '0320', 'beomseo');

INSERT INTO `MACHINE` (`name`, `target`) VALUES ('Bench', 'chest');
INSERT INTO `MACHINE` (`name`, `target`) VALUES ('Power_Rack', 'multi');
INSERT INTO `MACHINE` (`name`, `target`) VALUES ('Lat_Machine', 'back');
INSERT INTO `MACHINE` (`name`, `target`) VALUES ('Yoga_Mat', 'multi');
INSERT INTO `MACHINE` (`name`, `target`) VALUES ('Treadmill', 'cardio');

INSERT INTO `ROUTINE` (`name`, `Description`, `userId`) VALUES ('chest1', 'bench-yoga mat-treadmill', 1);
INSERT INTO `ROUTINE` (`name`, `Description`, `userId`) VALUES ('back1', 'lat machine-yoga mat-treadmill', 1);
INSERT INTO `ROUTINE` (`name`, `Description`, `userId`) VALUES ('leg1', 'power rack-yoga mat', 1);

INSERT INTO `IS_USING` (`machineId`, `userId`) VALUES (2, 4);
INSERT INTO `IS_USING` (`machineId`, `userId`) VALUES (3, 1);

INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (1, 1, '8x8');
INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (1, 4, '12x5');
INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (1, 5, '12min');
INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (2, 3, '12x5');
INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (2, 4, '12x5');
INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (2, 5, '12min');
INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (3, 2, '8x8');
INSERT INTO `IN_ROUTINE` (`routineId`, `machineId`, `set_time`) VALUES (3, 5, '10x6');