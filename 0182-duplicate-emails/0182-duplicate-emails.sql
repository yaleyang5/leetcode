# Write your MySQL query statement below
SELECT DISTINCT p1.email
FROM PERSON p1, PERSON p2
WHERE p1.email = p2.email
AND p1.id != p2.id;