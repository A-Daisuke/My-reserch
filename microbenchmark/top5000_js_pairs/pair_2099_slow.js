const Benchmark = {
    run: function() {
        var VAR_1 = "onCurrentElement";
        for (var VAR_2 = 0; VAR_2 < 500; VAR_2++) {
          var VAR_3 = VAR_1.replace(/^on([A-Z].*)/, function (VAR_4, VAR_5) {
            return VAR_5[0].toLowerCase() + VAR_5.substr(1);
          });
        }
    }
};