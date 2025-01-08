<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel with React</title>
    <link href="{{ mix('resources/css/app.css') }}" rel="stylesheet">  <!-- Compiled CSS -->
</head>
<body>
    <div id="example"></div>  <!-- React will render here -->
    
    <h5>WEB BABI</h5>

    <script type="module" src="{{ mix('resources/js/app.jsx') }}"></script>  <!-- Compiled JS -->
</body>
</html>
