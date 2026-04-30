const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push("Hello World !");
        }
        var VAR_4 = "";
        var VAR_5 = 0,
          VAR_6 = VAR_1.length;
        for (VAR_2; VAR_2 < VAR_6; VAR_2++) {
          VAR_4 = VAR_4.concat(" ", VAR_1[VAR_2]);
        }
    }
};