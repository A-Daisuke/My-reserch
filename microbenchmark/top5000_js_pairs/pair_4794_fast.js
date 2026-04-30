const Benchmark = {
    run: function() {
        (function copyDeep(VAR_2) {
          var VAR_3 = {};
          for (var VAR_4 in VAR_2) {
            typeof VAR_2[VAR_4] == "object"
              ? (VAR_3[VAR_5] = copyDeep(VAR_2[VAR_4]))
              : (VAR_3[VAR_6] = VAR_2[VAR_4]);
          }
          return VAR_3;
        })();
    }
};