const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1500; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = "|" + VAR_1.join("|");
        var VAR_4 = parseInt(Math.random() * 1500);
        var VAR_5 = new RegExp("(\\|" + VAR_4 + "$)|(\\|" + VAR_4 + "\\|)");
        VAR_4.toString().match(VAR_5);
    }
};