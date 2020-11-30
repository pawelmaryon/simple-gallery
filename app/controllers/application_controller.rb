class ApplicationController < ActionController::Base
    before_action :set_copyright

    def set_copyright
        @copyright = PMaryonViewTool::Renderer.copyright('DeckDesign', 'All rights reserved')
    end
end
module PMaryonViewTool
    class Renderer
        def self.copyright (name, msg)
            "&copy; #{Time.now.year} | <p>#{name}</p> #{msg}".html_safe
        end
    end
end