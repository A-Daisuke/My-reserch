const Benchmark = {
    run: function() {
        var VAR_1 = "<root><text>";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 += VAR_2.toString();
        }
        var VAR_3 = VAR_1 + "</text>/root>";
        VAR_1 += "</text><crc>123</crc></root>";
        var VAR_5 = /<crc>123<\/crc><\/root>$/;
        var VAR_8 = VAR_1.indexOf("<crc>123</crc>");
        var VAR_9 = VAR_3.indexOf("<crc>123</crc>");
    }
};