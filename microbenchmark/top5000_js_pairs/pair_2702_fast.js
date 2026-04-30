const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(String.fromCharCode(97));
        }
        var VAR_5 = 32768;
        var VAR_3 = "";
        for (var VAR_4 = 0; VAR_2 * VAR_5 < VAR_1.length; VAR_2++) {
          VAR_3 = VAR_3.concat.apply(VAR_3, VAR_1.slice(VAR_2 * VAR_5, VAR_5));
        }
    }
};