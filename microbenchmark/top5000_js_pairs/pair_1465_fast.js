const Benchmark = {
    run: function() {
        var VAR_1 = 500;
        var VAR_2 = 25;
        var VAR_5 = VAR_1 * VAR_2;
        var VAR_6 = new ArrayBuffer(VAR_5 * 4);
        var VAR_7 = VAR_2 * 4;
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          var VAR_4 = new Float32Array(VAR_6, VAR_3 * VAR_7, VAR_2);
        }
    }
};