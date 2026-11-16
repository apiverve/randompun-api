# Random Pun API - Dart/Flutter Client

Random Pun retrieves a random pun and its topic category on every request. Each call supplies the full pun text, with paid plans adding an additional humor rating score.

[![pub package](https://img.shields.io/pub/v/apiverve_randompun.svg)](https://pub.dev/packages/apiverve_randompun)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Random Pun API](https://apiverve.com/marketplace/randompun?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_randompun: ^1.2.6
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_randompun/apiverve_randompun.dart';

void main() async {
  final client = RandompunClient('YOUR_API_KEY');

  try {
    final response = await client.execute();
    
    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Random Pun API](https://apiverve.com/marketplace/randompun?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/randompun](https://docs.apiverve.com/ref/randompun?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
