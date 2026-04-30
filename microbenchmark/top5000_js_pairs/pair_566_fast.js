const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(String.fromCharCode(97));
        }
        var VAR_4 = 32768;
        var VAR_5 = "";
        for (var VAR_6 = 0; VAR_2 * VAR_4 < VAR_1.length; VAR_2++) {
          VAR_5 = VAR_5.concat.apply(VAR_5, VAR_1.slice(VAR_2 * VAR_4, VAR_4));
        }
    }
};