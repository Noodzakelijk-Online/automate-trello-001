//deleting selected member with the id already gotten and displaying success if delete was succesful or //
//members not found messageif not successful//

function deleteMember0() {
  if (membId0 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest0() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg0}/members/${membId0}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest0().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember1() {
  if (membId1 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest1() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg1}/members/${membId1}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest1().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember2() {
  if (membId2 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest2() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg2}/members/${membId2}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest2().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember3() {
  if (membId3 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest3() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg3}/members/${membId3}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest3().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember4() {
  if (membId4 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest4() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg4}/members/${membId4}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest4().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember5() {
  if (membId5 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest5() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg5}/members/${membId5}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest5().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}
function deleteMember6() {
  if (membId6 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest6() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg6}/members/${membId6}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest6().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember7() {
  if (membId7 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest7() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg7}/members/${membId7}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest7().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember8() {
  if (membId8 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest8() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg8}/members/${membId8}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest8().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember9() {
  if (membId9 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest9() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg9}/members/${membId9}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest9().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember10() {
  if (membId10 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest10() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg10}/members/${membId10}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest10().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember11() {
  if (membId11 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest11() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg11}/members/${membId11}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest11().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember12() {
  if (membId12 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest12() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg12}/members/${membId12}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest12().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember13() {
  if (membId13 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest13() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg13}/members/${membId13}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest13().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember14() {
  if (membId14 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest14() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg14}/members/${membId14}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest14().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember15() {
  if (membId15 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest15() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg15}/members/${membId15}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest15().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember16() {
  if (membId16 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest16() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg16}/members/${membId16}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest16().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember17() {
  if (membId17 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest17() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg17}/members/${membId17}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest17().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember18() {
  if (membId18 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest18() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg18}/members/${membId18}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest18().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember19() {
  if (membId19 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest19() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg19}/members/${membId19}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest19().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember20() {
  if (membId20 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest20() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg20}/members/${membId20}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest20().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember21() {
  if (membId21 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest21() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg21}/members/${membId21}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest21().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember22() {
  if (membId22 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest22() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg22}/members/${membId22}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest22().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember23() {
  if (membId23 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest23() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg23}/members/${membId23}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest23().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember24() {
  if (membId24 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest24() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg24}/members/${membId24}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest24().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember25() {
  if (membId25 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest25() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg25}/members/${membId25}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest25().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember26() {
  if (membId26 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest26() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg26}/members/${membId26}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest26().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember27() {
  if (membId27 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest27() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg27}/members/${membId27}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest27().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember28() {
  if (membId28 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest28() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg28}/members/${membId28}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest28().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember29() {
  if (membId29 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest29() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg29}/members/${membId29}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest29().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember30() {
  if (membId30 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest30() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg30}/members/${membId30}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest30().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember31() {
  if (membId31 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest31() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg31}/members/${membId31}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest31().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember32() {
  if (membId32 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest32() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg32}/members/${membId32}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest32().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember33() {
  if (membId33 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest33() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg33}/members/${membId33}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest33().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember34() {
  if (membId34 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest34() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg34}/members/${membId34}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest34().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember35() {
  if (membId35 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest35() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg35}/members/${membId35}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest35().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember36() {
  if (membId36 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest36() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg36}/members/${membId36}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest36().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember37() {
  if (membId37 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest37() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg37}/members/${membId37}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest37().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember38() {
  if (membId38 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest38() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg38}/members/${membId38}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest38().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember39() {
  if (membId39 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest39() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg39}/members/${membId39}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest39().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember40() {
  if (membId40 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest40() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg40}/members/${membId40}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest40().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember41() {
  if (membId41 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest41() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg41}/members/${membId41}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest41().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember42() {
  if (membId4 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest42() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg42}/members/${membId42}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest42().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember43() {
  if (membId43 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest43() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg43}/members/${membId43}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest43().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember44() {
  if (membId44 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest44() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg44}/members/${membId44}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest44().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember45() {
  if (membId45 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest45() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg45}/members/${membId45}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest45().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember46() {
  if (membId46 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest46() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg46}/members/${membId46}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest46().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember47() {
  if (membId47 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest47() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg47}/members/${membId47}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest47().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember48() {
  if (membId48 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest48() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg48}/members/${membId48}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest48().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember49() {
  if (membId49 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest49() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg49}/members/${membId49}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest49().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember50() {
  if (membId50 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest50() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg50}/members/${membId50}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest50().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember51() {
  if (membId51 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest51() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg51}/members/${membId51}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest51().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember52() {
  if (membId5 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest52() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg52}/members/${membId52}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest52().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember53() {
  if (membId53 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest53() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg53}/members/${membId53}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest53().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember54() {
  if (membId54 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest54() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg54}/members/${membId54}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest54().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember55() {
  if (membId55 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest55() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg55}/members/${membId55}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest55().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember56() {
  if (membId56 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest56() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg56}/members/${membId56}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest56().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember57() {
  if (membId57 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest57() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg57}/members/${membId57}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest57().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember58() {
  if (membId58 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest58() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg58}/members/${membId58}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest58().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember59() {
  if (membId59 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest59() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg59}/members/${membId59}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest59().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember60() {
  if (membId60 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest60() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg60}/members/${membId60}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest60().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember61() {
  if (membId61 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest61() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg61}/members/${membId61}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest61().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember62() {
  if (membId6 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest62() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg62}/members/${membId62}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest62().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember63() {
  if (membId63 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest63() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg63}/members/${membId63}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest63().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember64() {
  if (membId64 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest64() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg64}/members/${membId64}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest64().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember65() {
  if (membId65 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest65() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg65}/members/${membId65}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest65().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember66() {
  if (membId66 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest66() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg66}/members/${membId66}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest66().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember67() {
  if (membId67 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest67() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg67}/members/${membId67}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest67().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember68() {
  if (membId68 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest68() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg68}/members/${membId68}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest68().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember69() {
  if (membId69 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest69() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg69}/members/${membId69}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest69().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember70() {
  if (membId70 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest70() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg70}/members/${membId70}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest70().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember71() {
  if (membId71 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest71() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg71}/members/${membId71}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest71().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember7() {
  if (membId7 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest72() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg72}/members/${membId72}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest72().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember73() {
  if (membId73 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest73() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg73}/members/${membId73}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest73().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember74() {
  if (membId74 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest74() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg74}/members/${membId74}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest74().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember75() {
  if (membId75 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest75() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg75}/members/${membId75}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest75().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember76() {
  if (membId76 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest76() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg76}/members/${membId76}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest76().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember77() {
  if (membId77 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest77() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg77}/members/${membId77}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest77().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember78() {
  if (membId78 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest78() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg78}/members/${membId78}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest78().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember79() {
  if (membId79 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest79() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg79}/members/${membId79}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest79().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember80() {
  if (membId80 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest80() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg80}/members/${membId80}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest80().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember81() {
  if (membId81 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest81() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg81}/members/${membId81}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest81().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember82() {
  if (membId8 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest82() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg82}/members/${membId82}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest82().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember83() {
  if (membId83 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest83() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg83}/members/${membId83}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest83().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember84() {
  if (membId84 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest84() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg84}/members/${membId84}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest84().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember85() {
  if (membId85 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest85() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg85}/members/${membId85}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest85().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember86() {
  if (membId86 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest86() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg86}/members/${membId86}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest86().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember87() {
  if (membId87 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest87() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg87}/members/${membId87}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest87().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember88() {
  if (membId88 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest88() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg88}/members/${membId88}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest88().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember89() {
  if (membId89 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest89() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg89}/members/${membId89}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest89().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember90() {
  if (membId90 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest90() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg90}/members/${membId90}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest90().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember91() {
  if (membId91 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest91() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg91}/members/${membId91}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest91().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember92() {
  if (membId9 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest92() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg92}/members/${membId92}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest92().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember93() {
  if (membId93 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest93() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg93}/members/${membId93}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest93().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember94() {
  if (membId94 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest94() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg94}/members/${membId94}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest94().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember95() {
  if (membId95 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest95() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg95}/members/${membId95}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest95().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember96() {
  if (membId96 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest96() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg96}/members/${membId96}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest96().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember97() {
  if (membId97 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest97() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg97}/members/${membId97}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest97().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember98() {
  if (membId98 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest98() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg98}/members/${membId98}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest98().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember99() {
  if (membId99 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest99() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg99}/members/${membId99}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest99().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}

function deleteMember100() {
  if (membId100 == undefined) {
    showMemeberNotFound();
  } else {
    async function DeleteBoardTest100() {
      const response = await fetch(
        `https://api.trello.com/1/organizations/${nameOrg100}/members/${membId100}?key=${apiKey}&token=${apiToken}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      data = await response.json();


      if (data) {
        successMess();
      }
    }
    DeleteBoardTest100().catch((error) => {
      console.log("error");
      console.log(error);
    });
  }
}
