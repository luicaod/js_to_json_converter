# README.md

# Database Converter

This project is a simple database converter that transforms hardcoded database entries into JSON format.

## Project Structure

```
db-converter
├── src
│   ├── converter.js        # Main logic for converting database entries to JSON
│   ├── data
│   │   └── database.js     # Hardcoded array of database entries
│   └── output
│       └── result.json     # Output JSON file
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd db-converter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the converter:**
   ```bash
   node src/converter.js
   ```

4. **Check the output:**
   The JSON output will be saved in `src/output/result.json`.

## License

This project is licensed under the MIT License.