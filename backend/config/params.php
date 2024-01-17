<?php

return [
    'adminEmail' => 'admin@example.com',
    'senderEmail' => 'noreply@example.com',
    'senderName' => 'Example.com mailer',
    'jwt' => [
        'issuer' => 'https://softdesign.com',  //name of your project (for information only)
        'audience' => 'https://softdesign.com',  //description of the audience, eg. the website using the authentication (for info only)
        'id' => 'uIpBuZmp2gJX6nzOWc5GECp20ToYqsEi',  //a unique identifier for the JWT, typically a random string
        'expire' => 300,  //the short-lived JWT token is here set to expire after 5 min.
    ],
];
