const $ = require('jquery')

class PanelModule {
  constructor (el) {
    this.$el = $(el)
    this.$panels = this.$el.find('.panel')

    this.initializePanels()
  }

  initializePanels () {
    this.$panels.addClass('closed')
    this.$panels.first().removeClass('closed')

    this.$panels.each((i, panel) => {
      this.bindPanelEvent(panel)
    })
  }

  bindPanelEvent (panel) {
    const $panel = $(panel)
    $panel.find('button[type=submit]').on('click', this.moveToNextPanel)
  }

  moveToNextPanel (event) {
    const $panel = $(this).parents('.panel')
    const $nextPanel = $panel.next('.panel')

    $panel.addClass('closed completed')
    $nextPanel.removeClass('closed')
  }
}

$(function () {
  $('*[data-module="panels"]').each(function (i, el) {
    new PanelModule(el)
  })
})
