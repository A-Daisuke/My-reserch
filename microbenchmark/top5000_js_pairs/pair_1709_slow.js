const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(500000);
        var VAR_2 = new Uint8Array(VAR_1);
        for (var VAR_3 = VAR_2.length; VAR_3 != 0; VAR_3--) {
          var VAR_4 = VAR_2[VAR_3];
        }
    }
};