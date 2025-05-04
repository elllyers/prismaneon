-- SQL script to insert 20 realistic users into the "User" table with locations
INSERT INTO "User" (id, name, email, location, password, "createdAt", "updatedAt")
VALUES
    (gen_random_uuid(), 'John Doe', 'john.doe@example.com', 'New York, USA', 'password123', now(), now()),
    (gen_random_uuid(), 'Jane Smith', 'jane.smith@example.com', 'London, UK', 'securepass456', now(), now()),
    (gen_random_uuid(), 'Michael Brown', 'michael.brown@example.com', 'Toronto, Canada', 'mypassword789', now(), now()),
    (gen_random_uuid(), 'Emily Davis', 'emily.davis@example.com', 'Sydney, Australia', 'passw0rd!', now(), now()),
    (gen_random_uuid(), 'Chris Wilson', 'chris.wilson@example.com', 'Berlin, Germany', 'qwerty123', now(), now()),
    (gen_random_uuid(), 'Sarah Johnson', 'sarah.johnson@example.com', 'Paris, France', 'letmein456', now(), now()),
    (gen_random_uuid(), 'David Martinez', 'david.martinez@example.com', 'Madrid, Spain', '12345678', now(), now()),
    (gen_random_uuid(), 'Sophia Garcia', 'sophia.garcia@example.com', 'Rome, Italy', 'iloveyou789', now(), now()),
    (gen_random_uuid(), 'James Anderson', 'james.anderson@example.com', 'Chicago, USA', 'admin123', now(), now()),
    (gen_random_uuid(), 'Olivia Lee', 'olivia.lee@example.com', 'Seoul, South Korea', 'welcome456', now(), now()),
    (gen_random_uuid(), 'Daniel Kim', 'daniel.kim@example.com', 'Tokyo, Japan', 'hunter2!', now(), now()),
    (gen_random_uuid(), 'Emma Clark', 'emma.clark@example.com', 'Melbourne, Australia', 'password1', now(), now()),
    (gen_random_uuid(), 'Matthew Lewis', 'matthew.lewis@example.com', 'Dublin, Ireland', 'changeme!', now(), now()),
    (gen_random_uuid(), 'Isabella Walker', 'isabella.walker@example.com', 'Amsterdam, Netherlands', 'trustno1', now(), now()),
    (gen_random_uuid(), 'Ethan Hall', 'ethan.hall@example.com', 'San Francisco, USA', 'abc123!', now(), now()),
    (gen_random_uuid(), 'Mia Young', 'mia.young@example.com', 'Vancouver, Canada', 'password!', now(), now()),
    (gen_random_uuid(), 'Alexander Scott', 'alexander.scott@example.com', 'Cape Town, South Africa', 'letmein!', now(), now()),
    (gen_random_uuid(), 'Charlotte Adams', 'charlotte.adams@example.com', 'Auckland, New Zealand', 'secure123', now(), now()),
    (gen_random_uuid(), 'Benjamin White', 'benjamin.white@example.com', 'Hong Kong, China', 'myp@ssw0rd', now(), now()),
    (gen_random_uuid(), 'Amelia Harris', 'amelia.harris@example.com', 'Singapore', 'p@ssword!', now(), now());