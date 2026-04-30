const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1
            .split(/\s/)
            .map(function (VAR_2) {
              return VAR_2
                .split("")
                .filter(function (VAR_3, VAR_4) {
                  return !(VAR_2.charAt(VAR_4 - 1) == VAR_3 && VAR_2.charAt(VAR_4 + 1) == VAR_3);
                })
                .join("");
            })
            .join(" ");
        }
        var VAR_5 = FUNCTION_1("bookkeepers! are amaazing! loooooooool");
    }
};