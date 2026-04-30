const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 256; VAR_2 < 6; ++VAR_2, VAR_3 *= 2) {
          var VAR_4 = {};
          for (var VAR_5 = 0; VAR_5 < VAR_3; ++VAR_5) {
            VAR_4["key_" + VAR_5] = "value_" + VAR_5;
          }
          VAR_1.push(VAR_4);
        }
        var VAR_6 = Object.assign({}, VAR_1[3]);
    }
};