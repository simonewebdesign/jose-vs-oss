// Generated by CoffeeScript 1.4.0
(function() {
  var actions, button, close, comment, commentForm, insertButtons, textarea, tip;

  commentForm = document.querySelector('.js-new-comment-form');

  if (commentForm) {
    actions = commentForm.querySelector('.form-actions');
    close = actions.querySelector('.js-comment-and-button');
    comment = actions.querySelector('.primary');
    textarea = commentForm.querySelector('textarea');
    tip = actions.querySelector('.tip');
    if (tip) {
      actions.removeChild(tip);
    }
    button = function(text, innerHtml, closable) {
      var btn;
      if (closable == null) {
        closable = true;
      }
      btn = document.createElement('button');
      btn.innerHTML = text;
      btn.className = 'classy';
      btn.setAttribute('tabindex', '1');
      btn.setAttribute('type', 'submit');
      btn.setAttribute('style', 'margin-right: 4px;');
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        textarea.innerHTML = innerHtml;
        if (closable) {
          close.click();
        } else {
          comment.click();
        }
        return textarea.innerHTML = '';
      });
      return btn;
    };
    insertButtons = function() {
      var btn, div;
      div = document.createElement('div');
      div.setAttribute('style', 'float: left');
      btn = button('Sample app', 'Can you please provide a sample application that reproduces the error?', false);
      div.appendChild(btn);
      btn = button("Wiki", "The wiki is maintained by the community. So if there aren't any up to date instructions, we recommend you to explore the solution yourself and hopefully contribute your findings back!");
      div.appendChild(btn);
      btn = button("Mailing list", "Please use the mailing list or StackOverflow for questions");
      div.appendChild(btn);
      btn = button("Bad bug report", "You need to give us more information on how to reproduce this issue, otherwise there is nothing we can do. Please read CONTRIBUTING.md file for more information about creating bug reports. Thanks!");
      div.appendChild(btn);
      btn = button("<img src='https://a248.e.akamai.net/assets.github.com/images/icons/emoji/shipit.png' width='14' height='14'>", ":shipit:", false);
      div.appendChild(btn);
      btn = button("<img src='https://a248.e.akamai.net/assets.github.com/images/icons/emoji/crocodile.png' width='14' height='14'>", ":crocodile: :baby_bottle:", false);
      div.appendChild(btn);
      return actions.appendChild(div);
    };
    if (commentForm && close) {
      insertButtons();
    }
  }

}).call(this);
