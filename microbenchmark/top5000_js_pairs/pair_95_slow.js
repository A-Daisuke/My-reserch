const Benchmark = {
    run: function() {
        var VAR_1 = "1" + new Array(100000).join("0");
        VAR_1
          .split("")
          .reverse()
          .join("")
          .replace(/(\d{3})(?=[^$])/g, "$1,")
          .split("")
          .reverse()
          .join("");
    }
};