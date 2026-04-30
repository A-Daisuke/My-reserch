const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(500000);
        var VAR_2 = new Uint8Array(VAR_1);
        var VAR_5 = 0;
        while (VAR_5 != VAR_2.length) {
          var VAR_4 = VAR_2[VAR_5];
          VAR_5++;
        }
    }
};