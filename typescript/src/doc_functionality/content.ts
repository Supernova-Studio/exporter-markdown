// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Imports

import { pageUrl } from "./urls"


// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// MARK: - Support

/** Create a content tree */
export function contentTree(groups: Array<DocumentationGroup>, pages: Array<DocumentationPage>, prefix: string): Array<{title: string, url: string | undefined, offset: number, type: "page" | "group"}> {
    
    let items = new Array<{title: string, url: string | undefined, offset: number, type: "page" | "group"}>()

    for (let group of groups) {
        let level = -2 // We want to remove root, and we are also rendering all "master" groups as headers, hence -2 so the actual offset starts from 0
        let parent = group.parent
        while (parent) {
            level++
            parent = parent.parent
        }

        let pageLevel = level;

        if (!group.isRoot) {
            // Add group link
            items.push({
                title: group.title,
                url: pageUrl(group, prefix),
                offset: level,
                type: "group"
            })

            pageLevel += 1
        }

        // Add pages
        for (let child of group.children) {
            if (child.type === "Page") {
                let page = child as DocumentationPage
                items.push({
                    title: page.title,
                    url: pageUrl(page, prefix),
                    offset: pageLevel,
                    type: "page"
                })
            }
        }
    }

    return items
}


/** Create a offset */
export function offset(character: string, level: number, offset: number): string {
    return character.repeat(level * offset)
}
    