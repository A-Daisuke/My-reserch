const Benchmark = {
    run: function() {
        var VAR_1 = ["123", "456", "678"];
        var VAR_3 = new RegExp("[0-9]", "g");
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          var VAR_4 = VAR_1[VAR_2 % 2];
          VAR_3.exec(VAR_4);
        }
    }
};