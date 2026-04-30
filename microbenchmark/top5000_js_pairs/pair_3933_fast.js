const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0,
          VAR_3 = 0,
          VAR_4 = "";
        for (; VAR_2 < 1000; VAR_2++) {
          VAR_4 += '<div name="abc" data-attr="123">&nbsp;</div>';
        }
        VAR_4 = VAR_1.join("");
    }
};