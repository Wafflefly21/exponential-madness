<!DOCTYPE html>

<html>
  <head>
    <title id="title">
      Incremental Mania
    </title>
    <link rel="shortcut icon" type="image/png" href="light.png" id="favicon">
    <link rel="stylesheet" href="style.css">
  </head>
  <body id="body">
    <button type="button" class="veryBig" onclick="toTab('mult')">
      Multipliers
    </button>
    <button type="button" class="veryBig" onclick="toTab('achievement')">
      Achievements
    </button>
    <button type="button" class="veryBig" onclick="toTab('stat')">
      Statistics
    </button>
    <button type="button" class="veryBig" onclick="toTab('option')">
      Options
    </button>
    <button type="button" class="veryBig hidden" onclick="toTab('auto')" id="autoTabButton">
      Automation
    </button>
    <button type="button" class="veryBig hidden plexal" onclick="toTab('plexal')" id="plexalTabButton">
      Plexal
    </button>
    <button type="button" style="font-size:13px" class="veryBig hidden plexal" onclick="plexal()" id="plexButton">
      ???
      <br>
      Requires: ee100
    </button>
    <br>
    <br>
    <span id="number" style="font-size:50px"> 10 </span>
    <br>
    <br>
    Multiplying by <span id="multPerSecond"> 1 </span> every second
    <button type="button" onclick="maxAll()">
      Max All
    </button>
    <br>
    <br>
    <span class="tab" id='mult'>
      <span class="hidden" id="iterate">
        <span id="iteratorTotalBoost"> ^1 </span>
        Iteration: <span id="iteration"> 0 </span>
        <button type="button" onclick="iterate()" id="iterateButton">
          Iterate Cost: <span id="iterationCost">100</span>
        </button>
        <br>
        <br>
      </span>
      <span id="mult1">
        <span id="multPower1"> ^1 </span>
        Multiplier 1: <span id="multAmount1"> 1 </span>
        <button type="button" onclick="buyMult(1)" id="multButton1">
          Unlock Multiplier 1 Cost: 10
        </button>
      </span>
      <span class="hidden" id="mult2">
        <br>
        <span id="multPower2"> ^1 </span>
        Multiplier 2: <span id="multAmount2"> 1 </span>
        <button type="button" onclick="buyMult(2)" id="multButton2">
          Unlock Multiplier 2 Cost: 1e10
        </button>
      </span>
      <span class="hidden" id="mult3">
        <br>
        <span id="multPower3"> ^1 </span>
        Multiplier 3: <span id="multAmount3"> 1 </span>
        <button type="button" onclick="buyMult(3)"  id="multButton3">
          Unlock Multiplier 3 Cost: e1000
        </button>
      </span>
      <span class="hidden" id="mult4">
        <br>
        <span id="multPower4"> ^1 </span>
        Multiplier 4: <span id="multAmount4"> 1 </span>
        <button type="button" onclick="buyMult(4)" id="multButton4">
          Unlock Multiplier 4 Cost: e1e5
        </button>
      </span>
      <span class="hidden" id="mult5">
        <br>
        <span id="multPower5"> ^1 </span>
        Multiplier 5: <span id="multAmount5"> 1 </span>
        <button type="button" onclick="buyMult(5)" id="multButton5">
          Unlock Multiplier 5 Cost: e1e5
        </button>
      </span>
      <span class="hidden" id="mult6">
        <br>
        <span id="multPower6"> ^1 </span>
        Multiplier 6: <span id="multAmount6"> 1 </span>
        <button type="button" onclick="buyMult(6)" id="multButton6">
          Unlock Multiplier 6 Cost: e1e5
        </button>
      </span>
      <span class="hidden" id="mult7">
        <br>
        <span id="multPower7"> ^1 </span>
        Multiplier 7: <span id="multAmount7"> 1 </span>
        <button type="button" onclick="buyMult(7)" id="multButton7">
          Unlock Multiplier 7 Cost: e1e5
        </button>
      </span>
      <span class="hidden" id="mult8">
        <br>
        <span id="multPower8"> ^1 </span>
        Multiplier 8: <span id="multAmount8"> 1 </span>
        <button type="button" onclick="buyMult(8)" id="multButton8">
          Unlock Multiplier 8 Cost: e1e5
        </button>
      </span>
      <span class="hidden" id="mult9">
        <br>
        <span id="multPower9"> ^1 </span>
        Multiplier 9: <span id="multAmount9"> 1 </span>
        <button type="button" onclick="buyMult(9)" id="multButton9">
          Unlock Multiplier 9 Cost: e1e5
        </button>
      </span>
      <span class="hidden" id="mult10">
        <br>
        <span id="multPower10"> ^1 </span>
        Multiplier 10: <span id="multAmount10"> 1 </span>
        <button type="button" onclick="buyMult(10)" id="multButton10">
          Unlock Multiplier 10 Cost: e1e5
        </button>
      </span>
      <span class="hidden" id="reset">
        <br>
        <br>
        <span id="resetPower"> ^1 </span>
        Reset: <span id="resetAmount"> 0 </span>
        <button type="button" onclick="reset()" id="resetButton"> 
          Reset the game for a new multiplier Requires: ee11
        </button>
        <button type="button" class="hidden" onclick="maxReset()" id="maxResetButton">
          Max Reset
        </button>
      </span>
    </span>
    <span class="hidden tab" id='achievement'>
      <button type="button" class="big" onclick="toTab('normalAchieve')">
        Normal Achievements
      </button>
      <button type="button" class="big" onclick="toTab('secretAchieve')">
        Secret Achievements
      </button>
      <br>
      <button type="button" onclick="hideCompleted()" id="hideCompletedButton">
        Hide Completed Achievements
      </button>
      <span class="tab" id="normalAchieve">
        You have <span id="normalAchieveCount">0/100</span> normal achievements
      </span>
      <span class="hidden tab" id="secretAchieve">
        You have <span id="secretAchieveCount">0/100</span> secret achievements
      </span>
    </span>
    <span class="hidden tab" id='stat'>
      <button type="button" class="big" onclick="toTab('normalStat')" id="normalStatTabButton">
        Normal Stats
      </button>
      <button type="button" class="big hidden" onclick="toTab('plexalStat')" id="plexalStatTabButton">
        Plexal Stats
      </button>
      <br>
      <br>
      <span class="tab" id="normalStat">
        You have played the game for <span id="timePlayed">0 second</span>
        <br>
        <br>
        Your highest number ever is <span id="highestNum">10</span>
        <br>
        <br>
        <span id="totalReset">
          You have reseted a total of 0 time
        </span>
      </span>
      <span class="hidden tab" id="plexalStat">
        You have plexaled a total of <span id="plexalAmount">0 time</span>
        <br>
        <br>
        It has been <span id="plexalTime">0 second</span> since your last plexal.
      </span>
    </span>
    <span class="hidden tab" id='option'>
      <button type="button" class="big" onclick="save()" id="saveButton">
        Save
      </button>
      <button type="button" class="big" onclick="load()" id="loadButton">
        Load
      </button>
      <button type="button" class="big" onclick="toggleAutoSave()" id="autoSaveButton">
        Auto-Save: ON
      </button>
      <button type="button" style="font-size: 13px" class="big" onclick="changeAutoSaveSpeed()" id="autoSaveSpeedButton">
        Auto-Save Speed: 1s
      </button>
      <button type="button" class="big" onclick="openNotation()" id="notationButton">
        Notations
      </button>
      <br>
      <button type="button" class="big" onclick="exportSave()" id="exportButton">
        Export
      </button>
      <button type="button" class="big" onclick="importSave()" id="importButton">
        Import
      </button>
      <button type="button" class="big" onclick="changeUpdateSpeed()" id="updateSpeedButton">
        Update Speed: 50ms
      </button>
      <button type="button" class="big" onclick="cycleTheme()" id="themeButton">
        Light Theme
      </button>
      <br>
      <button type="button" class="big warning" onclick="wipeConfirm()">
        WIPE SAVE
      </button>
      <br>
      <span style="font-size: 10px">
        Hotkeys:
        <br>Hold Shift to Max (if applicable)
        <br>Numbers: Multiplier upgrades
        <br>M: Max all
        <span id="hotkeyReset"><br>R: Reset</span>
        <span id="hotkeyPlexal"><br>P: Plexal
        <br>I: Iterate</span>
      </span>
    </span>
    <span class="hidden tab" id="auto">
      <button type="button" class="big" onclick="toggleAuto(0)" id="autoMultButton">
        Auto Multiplier
        <br>
        ON
      </button>
      <button type="button" class="big" onclick="toggleAuto(1)" id="autoIterateButton">
        Auto Iterate
        <br>
        ON
      </button>
    </span>
    <span class="hidden tab" id="plexal">
      <button type="button" class="big" onclick="toTab('iterator')">
        The Iterator
      </button>
      <button type="button" class="big" onclick="toTab('plexalUpgrade')">
        Plexal Upgrade
      </button>
      <br>
      <br>
      You have <span style="font-size:40px;" id="plexalEssenceAmount">0</span> plexal essence
      <br>
      <br>
      <span class="tab" id="iterator">
        <button type="button" onclick="unlockIterator()" id="iteratorUnlock">
          Unlock Iterator
          <br>
          Cost: 1 Plexal Essence
        </button>
        <span class="hidden" id="iteratorUpgrade">
          The iterator boosts all multipliers by <span style="font-size: 30px;" id="iteratorBoost">^2</span> for each iteration
          <br>
          <br>
          <button style="font-size:13px;" type="button" onclick="upgradeIterator()" id="iteratorUpgradeButton">
            Multiply Iterator Boost by <span id="iteratorUpgradeBoost">2</span>
            <br>
            Cost: <span id="iteratorUpgradeCost">10</span> Plexal Essence
          </button>
          <button type="button" onclick="maxUpgradeIterator()" id="maxIteratorUpgradeButton">
            Max Upgrade
          </button>
        </span>
      </span>
      <span class="hidden tab" id="plexalUpgrade">
        You have to buy all of these upgrades in order! Left to right; top to bottom.
        <br>
        <br>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(1, 'plexal')" id="plexalUpg1">
          Boost all multiplier based on amount plexaled
          <br>
          Current: ^<span id="plexalUpg1Boost">1</span>
          <br>
          Cost: <span id="plexalUpg1Cost">1</span> Plexal Essence
        </button>
        <button type="button" style="font-size:11px;" class="veryBig" onclick="buyUpgrade(2, 'plexal')" id="plexalUpg2">
          Increase power of multiplier upgrades by the iterator power
          <br>
          Current: x<span id="plexalUpg2Boost">1</span>
          <br>
          Cost: <span id="plexalUpg2Cost">2</span> Plexal Essence
        </button>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(3, 'plexal')" id="plexalUpg3">
          Boost all multiplier based on current plexal essence
          <br>
          Current: ^<span id="plexalUpg3Boost">1</span>
          <br>
          Cost: <span id="plexalUpg3Cost">1</span> Plexal Essence
        </button>
        <br>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(4, 'plexal')" id="plexalUpg4">
          Resets are more powerful based on current reset amount
          <br>
          Current: x<span id="plexalUpg4Boost">1</span>
          <br>
          Cost: <span id="plexalUpg4Cost">3</span> Plexal Essence
        </button>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(5, 'plexal')" id="plexalUpg5">
          You start with more resets based on total reset amount
          <br>
          Current: <span id="plexalUpg5Boost">1</span>
          <br>
          Cost: <span id="plexalUpg5Cost">8</span> Plexal Essence
        </button>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(6, 'plexal')" id="plexalUpg6">
          Gain more plexal essence based on your current plexal essence
          <br>
          Current: x<span id="plexalUpg6Boost">1</span>
          <br>
          Cost: <span id="plexalUpg6Cost">15</span> Plexal Essence
        </button>
        <br>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(7, 'plexal')" id="plexalUpg7">
          Unlock automation
          <br>
          Cost: <span id="plexalUpg7Cost">ee200</span> Plexal Essence
        </button>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(8, 'plexal')" id="plexalUpg8">
          Resets also boost iterator upgrades
          <br>
          Cost: <span id="plexalUpg8Cost">eee3</span> Plexal Essence
        </button>
        <button type="button" style="font-size:12px;" class="veryBig" onclick="buyUpgrade(9, 'plexal')" id="plexalUpg9">
          You can now max reset
          <br>
          Cost: <span id="plexalUpg9Cost">eee4</span> Plexal Essence
        </button>
      </span>
    </span>
    <div class="hidden" id="grayout"></div>
    <div class="modal hidden" id="notationMenu">
      <div>
        <button type="button" style="float:right;" class="warning" onclick="closeAllModal()">x</button>
      </div>
      <br>
      <div style="float:left; margin:10px; text-align:center;">
        Splits
        <br>
        <button type="button" class="big noHover" id="split0">Layer-Mag (Fixed)</button>
        <br>
        &lt; <input type="text" value="1000" onblur="calcNotation()" id="split1"></input> &le;
        <br>
        <button type="button" class="big" onclick="selectSplit(2)" id="split2">Scientific</button>
        <br>
        &lt; <input type="text" value="1e100" onblur="calcNotation()" id="split3"></input> &le;
        <br>
        <button type="button" class="big" onclick="selectSplit(4)" id="split4">Logarithmic</button>
        <br>
        &lt; <input type="text" value="E1#5" onblur="calcNotation()" id="split5"></input> &le;
        <br>
        <button type="button" class="big" onclick="selectSplit(6)" id="split6">Hyper-E</button>
      </div>
      <div style="float:right; margin:10px; text-align:center; overflow:scroll; height:300px">
        Notations
        <br>
        <button type="button" class="big" onclick="changeSplit('Layer-Mag')">Layer-Mag</button>
        <br>
        <button type="button" class="big" onclick="changeSplit('Scientific')">Scientific</button>
        <br>
        <button type="button" class="big" onclick="changeSplit('Logarithmic')">Logarithmic</button>
        <br>
        <button type="button" class="big" onclick="changeSplit('Hyper-E')">Hyper-E</button>
        <br>
        <button type="button" class="big" onclick="changeSplit('Tetration')">
          Base-<input type="text" style="width:40%;" value="2" onblur="calcNotation()" id="tetrationBase"></input>
          Tetration
        </button>
        <br>
        <button type="button" class="big" onclick="changeSplit('HyperSci')">HyperSci</button>
        <br>
        <button type="button" class="big" onclick="changeSplit('Psi')">Psi</button>
        <br>
        <button type="button" class="big" onclick="changeSplit('SGH')">SGH</button>
      </div>
    </div>
    <textarea style="opacity: .01; height:0; position:absolute; z-index: -1;" id="exportArea">export text</textarea>
  </body>
  <script type="text/javascript" src="break_eternity.js"></script>
  <script type="text/javascript" src="main.js"></script>
</html>
