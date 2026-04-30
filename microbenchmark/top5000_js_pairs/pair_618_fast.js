const Benchmark = {
    run: function() {
        var VAR_1 = 256 * 1024;
        var VAR_2 = 8;
        var VAR_3 = new ArrayBuffer(VAR_1);
        var VAR_4 = new Uint8Array(VAR_3);
        for (var VAR_5 = 0; VAR_5 < 1024 * 1024; VAR_5 += VAR_2) {
          for (var VAR_6 = 0; VAR_6 < 7; ++VAR_6) VAR_4[VAR_5 + VAR_6] = 65 + VAR_6;
          VAR_4[VAR_5 + VAR_2 - 1] = 0;
        }
        var VAR_7 = 0;
        do {
          var VAR_10 = "";
          while (VAR_4[VAR_7] !== 0) {
            VAR_10 += String.fromCharCode(VAR_4[VAR_7++]);
          }
          ++VAR_7;
        } while (VAR_7 < VAR_1);
    }
};