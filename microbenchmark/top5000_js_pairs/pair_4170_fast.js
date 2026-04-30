const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 500; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var FUNCTION_1 = function (VAR_3) {
          var VAR_4 = 0;
          return {
            KEY_1: function () {
              return VAR_4 < VAR_3.length
                ? {
                    KEY_2: VAR_3[VAR_4++],
                    KEY_3: false,
                  }
                : { KEY_4: true };
            },
          };
        };
        var VAR_5 = FUNCTION_1(VAR_1);
        while ((item = VAR_5.KEY_1()).KEY_3 !== false) {
          item.KEY_2;
        }
    }
};