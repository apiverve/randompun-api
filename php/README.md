# Random Pun API - PHP Package

Random Pun retrieves a random pun and its topic category on every request. Each call supplies the full pun text, with paid plans adding an additional humor rating score.

## Installation

Install via Composer:

```bash
composer require apiverve/randompun
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Randompun\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute();

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Randompun\Client;
use APIVerve\Randompun\Exceptions\APIException;
use APIVerve\Randompun\Exceptions\ValidationException;

try {
    $response = $client->execute([]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "category": "Family, Parents",
    "rating": 2,
    "pun": "There was this guy who decided he wanted to live with his gay friends in a nudest colony and so he up and quit his job, and moved. He was really happy until he got a letter from his grandma. She told him he was about to die and wanted a picture of him. He got his friend to take a picture of him, and sice he had no clothes, he cut the picture in half. A few weeks later he received another letter from his grandma telling him he needed to get a haircut because it made his nose look long.... he soon realized he had sent her the wrong half."
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/randompun?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/randompun?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/randompun?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
