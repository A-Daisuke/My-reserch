const Benchmark = {
    run: function() {
        var VAR_1 =
          "Testing this string, going to reverse it and see how long it takes to do. Fun fun fun fun. I enjoy juggling apricots.";
        [].map
          .call(VAR_1, function (VAR_2) {
            return VAR_2;
          })
          .reverse()
          .join("");
    }
};