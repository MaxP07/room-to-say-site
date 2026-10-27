# Room to Say website

Static, responsive website using the approved Ocean + mist brand assets. No framework, package installation, external fonts, analytics, or form backend is required.

## Preview

From this directory, run `python3 -m http.server 4173 --bind 127.0.0.1` and open http://127.0.0.1:4173.

## Pages

- `index.html`: patient-facing introduction, founder story, printable preparation prompts, and introduction for partners.
- `partnerships.html`: proposed opportunities for charities and sponsors, without claiming existing endorsement.
- `support.html`: FAQs and a clearly marked support-contact gap.
- `privacy.html`: current website behaviour and explicit app-policy gaps. This is a draft, not a submission-ready privacy policy.

The app's development status is explicit. The hero is an illustrative preparation sheet, not an app screenshot. Product wording is based on the adjacent `ALONGWELL-V1.md` and the founder's account, with planned functionality presented as such.

## GitHub Pages

This folder must be the **root of a dedicated website repository**. The Pages workflow publishes the whole repository. Do not publish the parent workspace, which contains unrelated files and source notes.

1. Create a repository for this website and push this folder's contents to its `main` branch.
2. In Settings → Pages, choose **GitHub Actions** as the source.
3. Run the included Pages workflow, or push to `main`.
4. Confirm the resulting public URL and check all four pages.

All site links and asset paths are relative, so the site supports a GitHub project subpath and a custom domain without changing page markup.

## Launch blockers

- Add a verified public support, privacy, and partnership email; replace the notices on the relevant pages.
- Confirm the operator's identity and the app's actual data practices. Replace the privacy draft with a complete policy and identify the final host's processing.
- Review founder copy and planned product functionality against the release build.
- Add real App Store download information only when it exists.
- Check live URLs and finish the app's privacy disclosures before submitting to Apple. The website alone does not establish App Store compliance.

Apple references checked 27 October 2026:
- https://developer.apple.com/app-store/review/
- https://developer.apple.com/app-store/review/guidelines/
- https://developer.apple.com/app-store/app-privacy-details/

## Custom domain later

When a domain has been registered, set it in GitHub Pages and follow the DNS instructions GitHub supplies. Add the matching `CNAME` file to the repository, verify the domain, and enable HTTPS. No domain is hard-coded or assumed to have been purchased.
