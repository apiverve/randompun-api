# Random Pun API - Ruby Gem

Random Pun retrieves a random pun and its topic category on every request. Each call supplies the full pun text, with paid plans adding an additional humor rating score.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_randompun'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_randompun
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_randompun'

# Initialize the client
client = APIVerve::Randompun::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({  })
  puts response["data"]
rescue APIVerve::Randompun::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Randompun::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Randompun::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/randompun?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/randompun?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/randompun?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
