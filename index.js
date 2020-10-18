function openModal(_id, title) {
  const $modal = document.querySelector(".modal")
  if ($modal) {
    $modal.style.zIndex = 10
    const $ok = $modal.querySelector(".ok")
    const $cancel = $modal.querySelector(".cancel")
    const $input = $modal.querySelector(".input")
    const $title = $modal.querySelector(".title")
    $title.innerHTML = title

    const $text = document.querySelector(`#${_id}`)
    $input.value =
      $text.innerHTML.indexOf("입력해주세요") === -1 ? $text.innerHTML : ""
    $input.focus()
    $ok.onclick = function () {
      if ($text)
        $text.innerHTML =
          $input.value === "" ? `${title}을 입력해주세요` : $input.value
      $input.value = ""
      $modal.style.zIndex = -1
    }
    $cancel.onclick = function () {
      $input.value = ""
      $modal.style.zIndex = -1
    }
    $input.onkeypress = function (e) {
      if (e.key === "Enter") {
        $ok.click()
        $input.blur()
      }
    }
  }
}

window.onload = function () {
  const $profileButtons = document.querySelectorAll(".profile .button")

  $profileButtons.forEach(
    (i) =>
      (i.onclick = function () {
        let _id = i.parentNode.querySelector(".text").id
        let title = i.parentNode.querySelector(".title").innerHTML
        openModal(_id, title)
      })
  )
}
