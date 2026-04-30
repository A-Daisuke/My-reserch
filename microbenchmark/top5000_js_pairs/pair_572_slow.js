const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "lsh" };
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          switch (VAR_1.KEY_1) {
            case "and":
              if (!VAR_2) VAR_2 = "&";
            case "or":
              if (!VAR_2) VAR_2 = "|";
            case "xor":
              if (!VAR_2) VAR_2 = "^";
            case "rsh":
              if (!VAR_2) VAR_2 = ">>";
            case "ursh":
              if (!VAR_2) VAR_2 = ">>>";
            case "lsh":
              if (!VAR_2) VAR_2 = "<<";
          }
        }
    }
};