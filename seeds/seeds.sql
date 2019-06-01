use calculations_db;
INSERT into Calculations (Calc, createdAt, updatedAt)

VALUES ("1+1=3?", now(), now()),
	   ("2+2=4", now(), now());
       
SELECT * FROM Calculations;
