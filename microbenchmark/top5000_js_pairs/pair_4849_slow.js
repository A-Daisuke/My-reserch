const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return (function acc(VAR_2, VAR_3) {
            var VAR_4 = VAR_2[0];
            if (typeof VAR_4 === "undefined") return VAR_1;
            for (var VAR_5 = 0, VAR_6 = VAR_1.length; VAR_5 < VAR_6; ++VAR_5) VAR_1.push(VAR_1[VAR_5].concat(VAR_4));
            return acc(VAR_2.slice(1), VAR_1);
          })(VAR_1, [[]]).slice(1);
        };
        FUNCTION_1(["Paris", "Il de france", "France"]);
    }
};