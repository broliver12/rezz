function addPatterns() {
  let spiral_pattern = new Pattern(['red', 'red', 'red'], spiral_with_sets_pattern, centered_1_1_1_reflect_setCalculator);
  let quarter_pattern = new Pattern(['red', 'red', 'red'], spiral_with_sets_pattern, centered_2_3_5_setCalculator);
  let cross_pattern = new Pattern(['red', 'red', 'red'], spiral_with_sets_pattern, basicCross_setCalculator);
  let offset_pattern = new Pattern(['red', 'red', 'red'], spiral_with_sets_pattern, offset_1_3_5_setCalculator);
  let ccw_offset_pattern = new Pattern(['red', 'red', 'red'], spiral_with_sets_pattern, ccw_offset_1_3_5_setCalculator);
  let thickCross_pattern = new Pattern(['red', 'red', 'red'], spiral_with_sets_pattern, thickCross_setCalculator);
  let thickCross_reverse_inner_pattern = new Pattern(['red', 'red', 'red'], spiral_with_sets_pattern, thickCross_reverse_inner_setCalculator);

  let patterns = [
    spiral_pattern,
    quarter_pattern,
    cross_pattern,
    offset_pattern,
    ccw_offset_pattern,
    thickCross_pattern,
    thickCross_reverse_inner_pattern
  ];

  return patterns;
}

function setupLeftMiddleBlock() {

  //as
  //23
  //10

  const x_led1 = leftEyePosition_x + middleBlockCenterOffset;
  const y_led1 = leftEyePosition_y + middleBlockCenterOffset;

  const x_led2 = leftEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led2 = leftEyePosition_y + middleBlockCenterOffset;

  const x_led3 = leftEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led3 = leftEyePosition_y - upOffset - middleBlockCenterOffset;

  const x_led4 = leftEyePosition_x + middleBlockCenterOffset;
  const y_led4 = leftEyePosition_y - upOffset - middleBlockCenterOffset;

  leftMiddleBlockArray = [new LED('red', 0, x_led1, y_led1), new LED('red', 1, x_led2, y_led2),
    new LED('blue', 2, x_led3, y_led3), new LED('red', 3, x_led4, y_led4)
  ];
}

function setupRightMiddleBlock() {

  const x_led1 = rightEyePosition_x + middleBlockCenterOffset;
  const y_led1 = rightEyePosition_y + middleBlockCenterOffset;

  const x_led2 = rightEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led2 = rightEyePosition_y + middleBlockCenterOffset;

  const x_led3 = rightEyePosition_x - leftOffset - middleBlockCenterOffset;
  const y_led3 = rightEyePosition_y - upOffset - middleBlockCenterOffset;

  const x_led4 = rightEyePosition_x + middleBlockCenterOffset;
  const y_led4 = rightEyePosition_y - upOffset - middleBlockCenterOffset;

  rightMiddleBlockArray = [new LED('red', 0, x_led1, y_led1), new LED('red', 1, x_led2, y_led2),
    new LED('blue', 2, x_led3, y_led3), new LED('red', 3, x_led4, y_led4)
  ];
}

function setupInnerRings() {

  rightInnerRingArray = new Array(16);
  leftInnerRingArray = new Array(16);

  for (let i = 0; i < 16; i++) {
    let xOffset = innerRingRadius * Math.cos(i * (PI / 8));
    let yOffset = innerRingRadius * Math.sin(i * (PI / 8));
    rightInnerRingArray[i] = new LED('green', i + 4, rightEyePosition_x - (leftOffset / 2) + xOffset, rightEyePosition_y - (upOffset / 2) + yOffset, ledSize, ledSize);
    leftInnerRingArray[i] = new LED('green', i + 4, leftEyePosition_x - (leftOffset / 2) + xOffset, leftEyePosition_y - (upOffset / 2) + yOffset, ledSize, ledSize);

  }
}

function setupOuterRings() {

  leftOuterRingArray = new Array(16);
  rightOuterRingArray = new Array(16);

  for (let i = 0; i < 24; i++) {
    let xOffset = outerRingRadius * Math.cos(i * (PI / 12));
    let yOffset = outerRingRadius * Math.sin(i * (PI / 12));
    leftOuterRingArray[i] = new LED('blue', i + 20, leftEyePosition_x - (leftOffset / 2) + xOffset, leftEyePosition_y - (upOffset / 2) + yOffset);
    rightOuterRingArray[i] = new LED('yellow', i + 20, rightEyePosition_x - (leftOffset / 2) + xOffset, rightEyePosition_y - (upOffset / 2) + yOffset);

  }
}

function setupControlPanel() {
  // document.getElementById("changePatternButton").addEventListener("click", function() {
  //   patternManager.changePattern();
  // });
  // document.getElementById("changeSpeedButton").addEventListener("click", function(){
  //   setTimeUnit((timeUnit - 50)/10 + 10)
  // });
  canvas.parent('sketch');
}

function setupCustomLists() {

  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "colorList": */
  x = document.getElementsByClassName("colorList");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");

    if (i == 0) {
      a.setAttribute("id", middleBlockColorId);
    } else if (i == 1) {
      a.setAttribute("id", innerRingColorId);
    } else {
      a.setAttribute("id", outerRingColorId);
    }

    for (j = 0; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            if (h.id == middleBlockColorId) {
              setMiddleBlockColor(this);
            } else if (h.id == innerRingColorId) {
              setInnerRingColor(this)
            } else if (h.id == outerRingColorId) {
              setOuterRingColor(this)
            }
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);

}
