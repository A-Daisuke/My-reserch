const Benchmark = {
    run: function() {
        var VAR_1 = this.VAR_2++ || (this.VAR_2 = 0);
        var VAR_3 = new Function(
          "x",
          "y",
          "this.x" + VAR_1 + " = x; this.y" + VAR_1 + " = y;",
        );
        (function () {
          var VAR_4 = 0;
          var VAR_5 = [];
          while (VAR_4++ < 5000) {
            var VAR_6 = new VAR_3(VAR_4, VAR_4);
            VAR_5.push(VAR_6);
          }
          if (VAR_5.length != 5000) throw new Error();
        })();
    }
};