const Benchmark = {
    run: function() {
        var VAR_1;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          var VAR_3 = /[0-9]/gi,
            VAR_4 = "1,234,567,890,123,456,789",
            VAR_5 = VAR_4.match(VAR_3);
          VAR_1 = VAR_5 ? VAR_5.join("") : 0;
        }
        console.log(VAR_1);
    }
};