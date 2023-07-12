# Write your MySQL query statement below
SELECT e1.name AS Employee
FROM EMPLOYEE e1
INNER JOIN EMPLOYEE e2
ON e2.id = e1.managerId
WHERE e1.salary > e2.salary;