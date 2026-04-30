const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 < 65536; VAR_3++) {
          VAR_2 += String.fromCharCode(VAR_3);
        }
    }
};