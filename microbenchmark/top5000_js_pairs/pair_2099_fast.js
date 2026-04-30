const Benchmark = {
    run: function() {
        var VAR_1 = "onCurrentElement";
        for (var VAR_2 = 0; VAR_2 < 500; VAR_2++) {
          if (/^on[A-Z]/.test(VAR_1)) {
            var VAR_6 = VAR_1[2].toLowerCase() + VAR_1.substr(3);
          }
        }
    }
};