const Benchmark = {
    run: function() {
        var VAR_1 = "<root><text>";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 += VAR_2.toString();
        }
        var VAR_3 = VAR_1 + "</text>/root>";
        VAR_1 += "</text><crc>123</crc></root>";
        var VAR_4 = /<crc>123<\/crc>/;
        var VAR_5 = /<crc>123<\/crc><\/root>$/;
        var VAR_6 = VAR_5.test(VAR_1);
        var VAR_7 = VAR_5.test(VAR_3);
    }
};