const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "and" };
        var VAR_2;
        var VAR_3 = ["&", "|", "^", ">>", ">>>", "<<"];
        var VAR_4 = ["and", "or", "xor", "rsh", "ursh", "lsh"];
        for (var VAR_5 = 0; VAR_5 < 1000000; VAR_5++) {
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