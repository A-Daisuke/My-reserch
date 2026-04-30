const Benchmark = {
    run: function() {
        var VAR_1;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          var VAR_4 = "1,234,567,890,123,456,789";
          VAR_1 = VAR_4.replace(/\D/g, "");
        }
        console.log(VAR_1);
    }
};