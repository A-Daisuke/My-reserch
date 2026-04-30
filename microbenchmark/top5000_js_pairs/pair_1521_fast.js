const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 5000; VAR_2++) {
          VAR_1.push(VAR_2 % 2 ? "" + Math.random() : "client:" + Math.random());
        }
        VAR_1.filter(function (VAR_4) {
          return (
            VAR_4[0] === "c" &&
            VAR_4[1] === "l" &&
            VAR_4[2] === "i" &&
            VAR_4[3] === "e" &&
            VAR_4[4] === "n" &&
            VAR_4[5] === "t" &&
            VAR_4[6] === ":"
          );
        });
    }
};